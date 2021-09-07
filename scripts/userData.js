//User Display to Dom export that takes input of array from API
export const User = (inputUser) => {

    //Lines 5-8 are used to format dates
    const dateObjBirth = new Date(inputUser.dob.date);
    const formattedDateBirth = dateObjBirth.toLocaleDateString();
    const dateObjReg = new Date(inputUser.registered.date);
    const formattedDateReg = dateObjReg.toLocaleDateString();

	return `
            <img src="${inputUser.picture.large}" alt="Picture of ${inputUser.name.first}">
            <ul>
            <li>${inputUser.name.title}. ${inputUser.name.first} ${inputUser.name.last}</li>
            <li>Cell Number: ${inputUser.cell}</li>  
            <li>Email: ${inputUser.email}</li>
            <li class="location">${inputUser.location.street.number} ${inputUser.location.street.name}, ${inputUser.location.city}, ${inputUser.location.state}  ${inputUser.location.postcode}</li>
            <li>Age: ${inputUser.dob.age}</li>
            <li>DOB: ${formattedDateBirth}</li>
            <li> Date Registered: ${formattedDateReg} - ${inputUser.registered.age} years ago</li>
            <li>${inputUser.gender}</li>
            </ul>

            

    `
}