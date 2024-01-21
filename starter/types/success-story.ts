
export type SuccessStory = {
    personName: string;
    imgURL: string;
    role:string;
    location:string;
    story: story[];
}

export type story = {
    heading: string;
    paragraph: string;
}
