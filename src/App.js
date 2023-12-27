import './App.css';
import Header from './Header';
import { HiPlay, HiPause} from "react-icons/hi2";

function App() {
  return (
    <div className="App">
      <Header/>
			<div className="max-w-7xl mx-auto h-full">
				<div className="grid lg:grid-cols-3 gap-6 m-3 mt-6 h-full">
					{/* Content */}
					<div className="lg:col-span-2">
						<div className="space-y-4">
							<div className="text-center">
								<figure className="relative w-full min-h-96">
									<img
										className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
										src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
										alt="Image Description"
									/>
								</figure>
							</div>
							<h2 className="text-xl font-bold lg:text-3xl">
								Lorem ipsum dolor sit amet consectetur.
							</h2>
							<div className="flex items-center gap-x-5">
								<a
									className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 hover:bg-gray-200"
									href="#"
								>
									Goto Page
								</a>
								<p className="text-xs sm:text-s">
									January 18, 2023
								</p>
							</div>
							<p className="text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat a at laborum debitis temporibus dicta ipsam obcaecati voluptatem nostrum. Quos sint nostrum voluptate, assumenda optio porro asperiores cum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum vero cumque rem inventore deserunt nesciunt aliquid? Maiores ad inventore sint dolorum iste repudiandae nostrum modi. Magni totam laborum neque?
							</p>
							<p className="text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat a at laborum debitis temporibus dicta ipsam obcaecati voluptatem nostrum. Quos sint nostrum voluptate, assumenda optio porro asperiores cum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum vero cumque rem inventore deserunt nesciunt aliquid? Maiores ad inventore sint dolorum iste repudiandae nostrum modi. Magni totam laborum neque?
							</p>
							<p className="text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat a at laborum debitis temporibus dicta ipsam obcaecati voluptatem nostrum. Quos sint nostrum voluptate, assumenda optio porro asperiores cum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum vero cumque rem inventore deserunt nesciunt aliquid? Maiores ad inventore sint dolorum iste repudiandae nostrum modi. Magni totam laborum neque?
							</p>
							<p className="text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat a at laborum debitis temporibus dicta ipsam obcaecati voluptatem nostrum. Quos sint nostrum voluptate, assumenda optio porro asperiores cum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum vero cumque rem inventore deserunt nesciunt aliquid? Maiores ad inventore sint dolorum iste repudiandae nostrum modi. Magni totam laborum neque?
							</p>
							<p className="text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat a at laborum debitis temporibus dicta ipsam obcaecati voluptatem nostrum. Quos sint nostrum voluptate, assumenda optio porro asperiores cum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum vero cumque rem inventore deserunt nesciunt aliquid? Maiores ad inventore sint dolorum iste repudiandae nostrum modi. Magni totam laborum neque?
							</p>
							<p className="text-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat a at laborum debitis temporibus dicta ipsam obcaecati voluptatem nostrum. Quos sint nostrum voluptate, assumenda optio porro asperiores cum voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum vero cumque rem inventore deserunt nesciunt aliquid? Maiores ad inventore sint dolorum iste repudiandae nostrum modi. Magni totam laborum neque?
							</p>
						</div>
					</div>
					{/* End Content */}
					{/* Sidebar */}
					<div className="lg:col-span-1 w-full h-full">
						<div className="sticky top-0 start-0">
							<div className="grid gap-4">
								<div className="p-4 rounded-xl border border-blue-200 bg-white">
									<div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 mb-4">
										<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-green-200'>
											<HiPlay className="text-gray-500 h-4 w-4"/>
										</div>
										<h5 className="grow text-lg font-semibold">
											Video Title
										</h5>
										<span className="text-sm font-semibold">
											3:40
										</span>
									</div>
									<div className="space-y-1">
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-yellow-200'>
												<HiPause className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												0:20
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												1:10
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												2:15
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												3:01
											</span>
										</a>
									</div>
								</div>
								
								<div className="p-4 rounded-xl border border-blue-200 bg-white">
									<div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 mb-4">
										<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-green-200'>
											<HiPlay className="text-gray-500 h-4 w-4"/>
										</div>
										<h5 className="grow text-lg font-semibold">
											Video Title
										</h5>
										<span className="text-sm font-semibold">
											3:40
										</span>
									</div>
									<div className="space-y-1">
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												0:20
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												1:10
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												2:15
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												3:01
											</span>
										</a>
									</div>
								</div>
								
								<div className="p-4 rounded-xl border border-blue-200 bg-white">
									<div className="flex items-center gap-x-3 border-b border-gray-200 pb-4 mb-4">
										<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-green-200'>
											<HiPlay className="text-gray-500 h-4 w-4"/>
										</div>
										<h5 className="grow text-lg font-semibold">
											Video Title
										</h5>
										<span className="text-sm font-semibold">
											3:40
										</span>
									</div>
									<div className="space-y-1">
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												0:20
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												1:10
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												2:15
											</span>
										</a>
										<a className="group flex items-center gap-x-3 hover:bg-blue-50 rounded-md p-2" href="#">
											<div className='flex items-center justify-center min-w-8 h-8 rounded-full bg-blue-100'>
												<HiPlay className="text-gray-500 h-4 w-4"/>
											</div>
											<div className="grow flex items-center ">
												<div className="text-sm font-medium group-hover:text-blue-600">
													Lorem ipsum dolor sit amet, consectetur.
												</div>
											</div>
											<span className="text-sm font-semibold">
												3:01
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* End Sidebar */}
				</div>
			</div>
    </div>
  );
}

export default App;
