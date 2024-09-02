import supabaseClient from "/src/utils/supabase.js"

export async function getJobs(token) {
    const supabase=await supabaseClient(token);
    let query = supabase.from("jobs").select("*");
    const{data,error}=await query;
    if(error){
        console.error("Error fetching :",error);
        return null;
    }
    return data;
}
