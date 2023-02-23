import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const addInformationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: false
  },
  unity: {
    type: String,
    required: true
  }
}, { _id: false });

const DeviceSchema = new Schema({
    id: ObjectId,
    title: {type: String, required: true},
    description: {type: String, required: true},
    info: [{
        type: addInformationSchema,
        required: true,
      }]
    }, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const DeviceModel = mongoose.model('device', DeviceSchema);

export default DeviceModel;




  // validate: {
  //     validator: function(val: any) {
  //       for (let key in val) {
  //         if (!val[key].name && !val[key].value && !val[key].unity) {
  //           return false;
  //         }
  //       }
  //       return true;
  //     },
  //     message: (props: { path: string }) => `${props.path} is not in a valid format.`
  // }