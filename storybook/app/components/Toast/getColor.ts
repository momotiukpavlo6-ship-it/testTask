export const getTypeColor = (type:string) => {
    switch(type) {
        case "Success": return "bg-green-500";
        case "Info": return "bg-blue-500";
        case "Error": return "bg-red-500";
        case "Warning": return "bg-yellow-500";
        default: return "bg-green-500";
    }
};