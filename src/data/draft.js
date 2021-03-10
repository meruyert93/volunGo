const projectSchema = new mongoose.Schema(
    {
       title: {
           type: String,
           required: [true, 'A project must have a title'],
           unique: true,
           maxlength: [40, 'A project title must be less than 40 characters'],
           minlength: [10, 'A project title must be more than 10 characters']
         },
         contactPersonName: {
             type: String
         },
         contactPersonEmail: {
             type: String
         },
         numberOfVolunteers: {
             type: Number
         },
         description: {
             type: String
         },
         locationType: {
             type: String
         },
         location: {
             type: {
               type: String,
               default: 'Point',
               enum: ['Point']
             },
             coordinates: [Number],
             address: String,
         },
         startDate: {
           type: Date,
         },
         endDate: {
           type: Date
         },
         startTime: {
           //!It should NOT be a string.
           type: String
         },
         //!It should NOT be a string.
         endTime: {
           type: String
         },
         recurringEvent: {
           type: Boolean
         },
         ageRestrictions: {
           type: Boolean
         },
         genderRestrictions: {
           type: Boolean
         },
         requirements: {
           type: [String],
           validate: {
               validator(requirements) {
                 let existingRequirements = [
                   "empathy",
                   "social skills",
                   "medical skills",
                   "cooking",
                   "communication skills",
                   "language",
                   "play musical instrument",
                   "gardening skills",
                   "drawing & Painting",
                   "film & Photography",
                   "pc skills",
                   "programming",
                   "physical work",
                   "construction skills"];
                   let isExists = true;
                       for (let value of requirements) {
                         if (existingRequirements.indexOf(value) === -1) {
                           isExists = false;
                       }
                     }
                   return isExists;
               },
               message: 'Check requirements you are writing'
             }
         },
         imageCover: String,
         images: [String],
         CreatedAt: {
           type: Date,
           default: Date.now()
         },
    })