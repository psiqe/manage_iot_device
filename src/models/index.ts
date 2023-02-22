import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const DeviceSchema = new Schema({
    id: ObjectId,
    title: {type: String, required: true},
    description: {type: String, required: true},
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const DeviceModel = mongoose.model('device', DeviceSchema);

export default DeviceModel;