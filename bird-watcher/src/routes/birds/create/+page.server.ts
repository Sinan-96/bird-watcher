import { error } from '@sveltejs/kit';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_CLOUD_NAME ,CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } from '$env/static/private';
import prisma from '$lib/prisma';
import { Buffer } from 'buffer'
import { Cloudinary } from '@cloudinary/url-gen';
const cld = new Cloudinary({
  cloud: {
    cloudName: CLOUDINARY_CLOUD_NAME
  }
}); 

cloudinary.config({
	cloud_name: CLOUDINARY_CLOUD_NAME,
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
	secure: true
});
export const actions = {
	default: async ({ request }) => {
		try {
			/*
			 * @type {FormData}
			 */
			const formData = await request.formData();
			/**
			 * @type {FormDataEntryValue | null}
			 */
			const fileData = formData.get('file');
			const myImage = cld.image(CLOUDINARY_CLOUD_NAME).format('auto').quality('auto').toURL()

			return new Promise((resolve, reject) => {
				cloudinary.uploader.upload(fileData.)
				function onDone(error, result) {
					if (error) {
						return reject({ success: false, error });
					}
					return resolve({ success: true, result })
				}
			});
  

			return { success: true, image: uploadStream.url };
		} catch (er) {
			console.error(er);
			return error(er);
		}
	}
};