const mediaModel = require('../model/mediaModel');

class MediaService {
    async getMediaById(id) {
        return await mediaModel.findOne({
            where: {
                id
            },
            attributes: ['id','path','name']
        })
    }
    async createMedia(info) {
        let { originalname,filename } = info
        let path;
        if(filename) {
            path = 'upload/'+filename;
            let media_info = await mediaModel.create({ 
                path,
                name: filename
            })
            return this.getMediaById(media_info.id);
        }else{
            return ''
        }
    }
}

module.exports = new MediaService();