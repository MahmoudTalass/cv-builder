/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EditEducationForm({
   handleEditingStatus,
   dataBeingEdited,
   handleEditEducation,
}) {
   const [currentData, setCurrentData] = useState(dataBeingEdited);

   function handleChange(e, key) {
      setCurrentData({ ...currentData, [key]: e.target.value });
   }

   return (
      <form
         className="personalDataForm form"
         onSubmit={(e) => {
            e.preventDefault();
            handleEditingStatus();
            handleEditEducation(currentData);
         }}
      >
         <div className="input-container">
            <label htmlFor="degree">Degree:</label>
            <input
               type="text"
               name="degree"
               id="degree"
               required
               value={currentData.degree}
               onChange={(e) => handleChange(e, ["degree"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="school">School:</label>
            <input
               type="text"
               name="school"
               id="school"
               required
               value={currentData.school}
               onChange={(e) => handleChange(e, ["school"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="city">City:</label>
            <input
               type="text"
               name="city"
               id="city"
               required
               value={currentData.city}
               onChange={(e) => handleChange(e, ["city"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="state">State:</label>
            <input
               type="text"
               name="state"
               id="state"
               required
               value={currentData.state}
               onChange={(e) => handleChange(e, ["state"])}
            />
         </div>
         <div className="input-container">
            <label htmlFor="graduation-date">Graduation Date:</label>
            <input
               type="text"
               name="graduation-date"
               id="graduation-date"
               maxLength={7}
               placeholder="MM/YYYY"
               required
               value={currentData.graduationDate}
               onChange={(e) => handleChange(e, ["graduationDate"])}
            />
         </div>
         <button type="submit">Edit</button>
      </form>
   );
}
