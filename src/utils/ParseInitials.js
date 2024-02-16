export const ParseInitials =(name) =>{
    if(!name) return "";
    const nameParts = name.split(" ");
    const firstName = nameParts[0] ? nameParts[0][0] : "";
    const lastName = nameParts[1] ? nameParts[1][0] : "";
    const initials = firstName + lastName;
    return initials;
}