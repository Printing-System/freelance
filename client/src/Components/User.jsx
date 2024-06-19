import React from "react";

const User = () => {
	return (
		<div className="w-screen h-screen p-4">
			<div className="w-full h-full">
				<div className="w-full h-10 flex justify-center items-center">
					<h1>[Website Name]</h1>
				</div>
				<form
					action=""
					className="w-full h-auto flex flex-col justify-center items-center gap-8"
				>
					<div className="w-full h-auto">
						<label
							for="dropzone-file"
							class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
						>
							<div class="flex flex-col items-center justify-center pt-5 pb-6">
								<svg
									class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
									/>
								</svg>
								<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
									<span class="font-semibold">Click to upload</span> or drag and
									drop
								</p>
								<p class="text-xs text-gray-500 dark:text-gray-400">
									SVG, PNG, JPG or GIF (MAX. 800x400px)
								</p>
							</div>
							<input id="dropzone-file" type="file" class="hidden" />
						</label>
					</div>
					<div className="w-full h-auto flex gap-2">
						<input
							type="number"
							placeholder="Number of Pages"
							required="true"
							className="w-1/2 h-[3rem] rounded-lg  border border-black p-2"
						/>
						<select
							name="subset"
							id="subset"
              placeholder="odd / even"
							className="w-1/2 h-[3rem] rounded-lg border border-black"
						>
							<option value="">None</option>
							<option value="odd">Odd</option>
							<option value="even">Even</option>
						</select>
					</div>
					<div className="w-full h-auto flex gap-2">
						<select
							name="orientation"
							id="orientation"
							placeholder="select orientation"
							defaultValue="portrait"
							className="w-1/2 h-[3rem] rounded-lg  border border-black"
						>
							<option value="portrait">Portrait</option>
							<option value="landscape">Landscape</option>
						</select>
						<select
							name="monochrome"
							id="monochrome"
							placeholder="Coloured"
							defaultValue="false"
							className="w-1/2 h-[3rem] rounded-lg  border border-black"
						>
							<option value="false">Coloured</option>
							<option value="true">Black and White</option>
						</select>
					</div>
					<div className="w-full h-auto flex gap-2">
						<select
							name="side"
							id="side"
							placeholder="Duplex"
							defaultValue="duplex"
							className="w-1/2 h-[3rem] rounded-lg  border border-black"
						>
							<option value="duplex">Duplex</option>
							<option value="simplex">Simplex</option>
						</select>
						<select
							name="paperSize"
							id="paperSize"
							placeholder="A4"
							defaultValue="A4"
							className="w-1/2 h-[3rem] rounded-lg  border border-black"
						>
							<option value="A2">A2</option>
							<option value="A3">A3</option>
							<option value="A4">A4</option>
							<option value="A5">A5</option>
							<option value="A6">A6</option>
						</select>
					</div>
					<div className="w-full h-auto">
						<select
							name="copies"
							id="copies"
							className="w-full h-[3rem] rounded-lg  border border-black"
							placeholder="1"
							defaultValue="1"
						>
							<option value="1">1 (single copy)</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className="w-full h-auto flex justify-start">
						<button className="w-2/3 h-[3rem] rounded-lg  rounded-xl bg-blue-500 hover:bg-blue-400 hover:cursor-pointer text-white">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default User;
