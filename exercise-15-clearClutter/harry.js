import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\sumanthr\\OneDrive - Advanced Micro Devices Inc\\Documents\\ReactJs\\sigmawebdev\\exercise-15-clearClutter"

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        //  item.split(".").length > 1 --- if their is empty folder, then it will not consider that folder
        // as folder name does not contain . ,  item.split(".").length will be zero


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}