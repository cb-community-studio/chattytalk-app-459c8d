// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'deviceinfo';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
       id: { type: Number },
       board: { type: String },
       bootloader: { type: String },
       brand: { type: String },
       device: { type: String },
       display: { type: String },
       fingerprint: { type: String },
       hardware: { type: String },
       host: { type: String },
       manufacturer: { type: String },
       model: { type: String },
       product: { type: String },
       supported32BitAbis: { type: String },
       supported64BitAbis: { type: String },
       tags: { type: String },
       type: { type: String },
       isPhysicalDevice: { type: String },
       androidId: { type: String },
       systemFeatures: { type: String },
       createdAt: { type: Date },
       updatedAt: { type: Date },

    }
          // ~cb-read-end~
          , 
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };