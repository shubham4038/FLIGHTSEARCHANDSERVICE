class CrudRepository{

    constructor(model){
        this.model = model;
    }
    async create(data){
        try {
            console.log(data);
            const result = await this.model.create(data);
            console.log(result);
            return result;
        } catch (error) {
            console.log("Somethin went wron at repository layer");
            throw(error)
        }
    }

    async destroy(modelId){
        try {
            const result = await this.model.destroy({
                where:{
                    id:modelId
                }
            })
            return result;
        } catch (error) {
            console.log("Somethin went wron at repository layer");
            throw(error)
        }
    }

    async update(modelId,data){
        try {
            const result = await this.model.update(data,{
                where:{
                    id:modelId
                }
            });
            return result;
        } catch(error){
            console.log("Somethin went wron at repository layer");
            throw(error);
        }
    }

    async get(id){
        try {
            const result = await this.model.findByPk(id);
         return result;
        } catch (error) {
            console.log("Somethin went wron at repository layer");
            throw(error);
        }
    }
}

module.exports = CrudRepository;