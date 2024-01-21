type Blog = {
    image : string;
    title : string;
    description : string;
    author: string;
    isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[];
    skills: string[];
    id: string;
    createdAt: Date;
    updatedAt: Date;

}

export default Blog;

