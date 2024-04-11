import { type Tags } from "../entities/Tags";
import { type Tools } from "../entities/Tools";

async function transformTagsInArray(
    result: Tools,
    positionInArray: number,
): Promise<Tools> {
    result.tags = result.tags.map((tag): Tags => {
        const arrayTags = Object.values(tag)[positionInArray];
        return arrayTags;
    });
    return result;
}

export { transformTagsInArray };
