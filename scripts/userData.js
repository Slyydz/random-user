//User Display to Dom export that takes input of array from API
export const User = (inputUser) => {
    //Lines 4-7 are used tom format dates
    const dateObjBirth = new Date(inputUser.dob.date);
    const formattedDateBirth = dateObjBirth.toDateString();
    const dateObjReg = new Date(inputUser.registered.date);
    const formattedDateReg = dateObjReg.toDateString();

	return `
            <img src="${inputUser.picture.large}" alt="Picture of ${inputUser.name.first}">
            <h1>${inputUser.name.title}. ${inputUser.name.first} ${inputUser.name.last}</h1>
            <h2>Cell Number: ${inputUser.cell}</h2>  
            <h2>Email: ${inputUser.email}</h2>
            <h3 class="location">${inputUser.location.street.number} ${inputUser.location.street.name}</h3>
            <h3 class="location">${inputUser.location.city}, ${inputUser.location.state}  ${inputUser.location.postcode}</h3>
            <h4>Age: ${inputUser.dob.age}</h4>
            <h4>DOB: ${formattedDateBirth}</h4>
            <h4> Date Registered: ${formattedDateReg} - ${inputUser.registered.age} years ago</h4>
            <h4>${inputUser.gender}</h4>

            

    `
}