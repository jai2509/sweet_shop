import Layout from "../../components/layout/layout";
const products = [
    {
        id: 1,
        name: 'Ghee Mysore Pak',
        imageSrc:
            'https://anandhaassweets.com/cdn/shop/files/GheeMysorePak_1_720x.png?v=1715585447',
        href: '#',
        price: '₹300',
        weight : '200',
        imageAlt: 'Ghee Mysore Pak',
        quantity: 1,
    },
]

const UserDashboard = () => {
    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className=" bg-pink-50 py-5 rounded-xl border border-pink-100">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            <h1 className=" text-center text-lg"><span className=" font-bold">Name :</span> Jai Kumar Mishra </h1>
                            <h1 className=" text-center text-lg"><span className=" font-bold">Email :</span> test@gmail.com</h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

                        {/* main 2 */}
                        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-pink-100 md:flex-row">
                            {/* main 3  */}
                            <div className="w-full border-r border-pink-100 bg-pink-50 md:max-w-xs">
                                {/* left  */}
                                <div className="p-8">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-black">Order Id</div>
                                            <div className="text-sm font-medium text-gray-900">#74557994327</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Date</div>
                                            <div className="text-sm font-medium text-gray-900">18 august,2024</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Total Amount</div>
                                            <div className="text-sm font-medium text-gray-900">₹300</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Order Status</div>
                                            <div className="text-sm font-medium text-green-800">Confirmed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right  */}
                            <div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={product.imageSrc}
                                                            alt={product.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-gray-900">{product.name}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-gray-500">{product.color}</p>
                                                        </div>

                                                        <p className="mt-4 text-sm font-medium text-gray-500">x {product.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    <p className="text-right text-sm font-bold text-gray-900">{product.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;