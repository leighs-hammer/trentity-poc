import sha256 from "sha256"
import {time} from "./startTime"

const startDate = time // requires generation check npm scripts
const passage = `What will you tell your children
When they ask you "What went wrong?"
How can you paint a picture of a paradise lost
To eyes that know only a wasteland?
How will you justify
Justify watching the world die?
The clock is ticking, can't you feel our days are numbered?
Head first into disaster from which there will be no return
With narrow minds we decimate our one true home
Cast into oblivion, judgement is calling
Behold the pale horse
This is the funeral of the Earth
Behold the pale horse
This is the funeral
The blind eye can no longer be cast
The clock is ticking, there is no second chance
The blind eye can no longer be cast
There will be no future, if we can't learn from our mistakes
The clock is ticking, there is no second chance
There will be no future, if we can't learn`
const primer = "Go Go GO"

export const gateKey = sha256(JSON.stringify({startDate, passage, primer}))
