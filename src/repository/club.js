
exports.getData = async (model) => {
   return await model.find({})
   
    
};
exports.createData = (content,model) => {
    return new model({
      ...content
    }).save();
    
};

exports.removeData =  (id,model) => {
  return model.findByIdAndRemove({
      _id: id,
    });
};

exports.updateData =  (id,model, content) => {
 
    return  model.findByIdAndUpdate( { _id: id },
      { ...content },
      { new: true });
};

exports.findData =(id, model)=>{
  return model.findById(id)
}

