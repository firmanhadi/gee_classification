# 1. Install packages
install.packages("sf")
install.packages("terra")
install.packages("sits", dependencies = TRUE)

# 2. Load packages
library(sits)
library(gdalcubes)
library(reticulate)
library(tensorflow)
library(tibble)
library(magrittr)
library(profvis)
library(randomForest)
library(sf)
library(xgboost)
library(stars)
library(tmap)

# 3. Set data directory
#data_dir <- "E:/Dropbox/Research/LandCover/Sragen/sits/sragen_1_7_21/images"
data_dir <- "./Data"
list.files(data_dir)[1]

# 4. Area of interest
# define the cube
roi <- c("xmin" = 110.7697150039179661,
         "xmax" = 111.173669475385338,
         "ymin" =  -7.5341603202722345,
         "ymax" = -7.2564656337963829)

# Search Sentinel data
#s2_cube <- sits_cube(
#  source = "MPC",
#  collection = "SENTINEL-2-L2A",
#  tiles = c("49MDM","49MEM"),
#  bands = c(  "B02","B03","B04","B05","B06","B07","B08","CLOUD"),
#  start_date = as.Date("2021-01-01"),
#  end_date = as.Date("2021-07-01"),s2_resolution = 20
#)


# 5. Create cube from local directory
s2_local_cube <- sits_cube(
  source = "MPC",
  collection = "SENTINEL-2-L2A",
  data_dir = data_dir,
  parse_info = c("X1", "tile", "band", "date" )
)

s2_reg_cube <- sits_regularize(
  cube       = s2_local_cube,
  output_dir = "./regular",
  res        = 20,
  period     = "P15D",
  multicores = 6
)
# calculate REIP indexes
s2_reg_cube <- sits_apply(s2_reg_cube,
                          REIP = 702+40*((((B04+B07)/2)-B05)/(B06-B05)),
                          output_dir = "./regular",
                          multicores = 5,
                          memsize = 12
)

samples <-read.csv("sampel3.csv")

samples_S2_49MDMMEM <- sits_get_data(s2_reg_cube, samples = "./sampel3.csv", crs=4326)

# build the classification model
# 7 Bands
# Train using  Random forest
rf_model <- sits_train(
  samples = samples_S2_49MDMMEM ,
  ml_method = sits_rfor(num_trees = 50)
)

# Classify using RF model and plot the result
point_class <- sits_classify(
  data = samples_S2_49MDMMEM,
  ml_model = rf_model
)

# classify the cube using an RF model
s2_probs_7bands <- sits_classify(
  s2_reg_cube,
  rf_model,
  memsize = 16,
  roi=roi,
  multicores = 6,
  output_dir  = "./img_rf_7bands/", verbose=TRUE
)

plot(s2_probs_7bands)

s2_label7 <- sits_label_classification(s2_probs_7bands, output_dir = "./img_rf_7bands/")

plot(s2_label7)

s2_bayes7 <- sits_smooth(s2_probs_7bands, window_size=5, output_dir = "./img_rf_7bands_bayes/")

s2_label7_bayes <- sits_label_classification(s2_bayes7, output_dir = "./img_rf_7bands_bayes/")


#validation
val_rfor <- sits_kfold_validate(samples_S2_49MDMMEM ,
                                   folds = 5,
                                   ml_method = sits_rfor())
val_rfor
