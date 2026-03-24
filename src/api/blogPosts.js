const BASE_URL = `http://localhost:8080`;

const getAllPublishedBLogPosts = async () => {

    const res = await fetch(`${BASE_URL}/blog`);
    if(!res.ok){
        throw new Error("Error fetching published blog posts");
    }
    const data = await res.json();

    return data;


}


export {getAllPublishedBLogPosts};
