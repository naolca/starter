import SelectionButton from "../../../components/SelectionButton/SelectionButton"

const tags = [
    "Development","Sports","Politics","Entertainment","Technology","Science","Health","Business","Education","Travel","Food","Lifestyle","Fashion","Fitness","Music","Art","Photography","Gaming","Movies","Books","Design","Marketing","Finance","History","Parenting","News","Nature","Psychology","Spirituality","Writing","Other"
]


export default function NewBlog() {
    return (
        <div
            className="flex justify-between  gap-x-4 m-20 w-full"
        >
            {/* the feilds on the left */}
            <div className="flex flex-col justify-between gap-y-10 flex-1">
                {/* Title input */}
                <div
                    className="border-l-2 border-l-primary"
                >
                    <input
                        className="flex  p-2 m-2 text-2xl focus:border-none"
                        type="text"
                        placeholder="Enter the title of the blog"
                    />
                </div>

                {/* image input */}

                    <div className="flex items-center justify-center w-full self-center m-auto">
                        
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 

                {/* content input */}
                    <div
                    className="border-l-2 border-l-primary h-64"
                >
                    <textarea
                        className="flex  p-2 m-2 text-2xl focus:border-none h-full w-full"
                        placeholder="Blog content.."
                    />


                </div>

                {/* cancle and save changes buttons */}
                <div
                    className="flex justify-end gap-x-4"
                >
                    <button
                        className="bg-gray-200 p-2 rounded-lg text-primary"
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-primary p-2 rounded-lg text-white pl-6 pr-6"
                    >
                        Save Changes
                    </button>
                </div>
                
            </div>

            {/*divider*/}
                    <div className="border-l border-gray-200 ml-48"></div>

            {/* tags selection */}
            <div
                className="flex flex-col gap-y-4 flex-1"
            >
            <div>
                Select Tag
            </div>
            <div
                className="flex flex-wrap gap-x-4 gap-y-4 self-start"
            >
                {tags.map((tag, index) => (
                    <SelectionButton option={tag} key={index}/>
                ))}

            </div>

            </div>

            
        </div>
    )
}