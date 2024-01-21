import {story} from "../types/success-story";
import {SuccessStory} from "../types/success-story";


export async function getSuccessStories(): Promise<SuccessStory[]> {
    const response = await fetch(`https://a2sv-backend.onrender.com/api/success-stories`);
    const res = await response.json();
    if (!response.ok) {
        throw new Error(res.statusText);
    }
    const stories: SuccessStory[] = [];
    res.forEach((story: any) => {
        const stor: story[] = [];
        story.story.forEach((s: any) => {
            const st: story = {
                heading: s.heading,
                paragraph: s.paragraph
            }
            stor.push(st);
        });
        const s: SuccessStory = {
            personName: story.personName,
            imgURL: story.imgURL,
            role: story.role,
            location: story.location,
            story: stor
        }
        stories.push(s);
    });
    return stories;
}