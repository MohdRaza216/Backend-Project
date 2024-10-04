import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        owner: {
            type: String.Types.ObjectId,
            ref: "User"
        },
        video: {
            type: String.Types.ObjectId,
            ref: "Video"
        }
    }, {timestamp: true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentSchema)