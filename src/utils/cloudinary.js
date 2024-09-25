import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return console.error("Could not find the path.");
            // Upload an image
            const response = await cloudinary.uploader
                .upload(
                    localFilePath, {
                    resource_type: "auto"
                }
                )
            // file has been uploaded successfull 
            console.log("file is uploaded on cloudinary ", response);
            return response;

        } catch (error) {
            fs.unlinkSync(localFilePath); // To remove the locally saved temporary file as the upload operation got failed scenario
            return null;
        }
    }

    export {uploadOnCloudinary}


