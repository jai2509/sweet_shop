import{useNavigate} from "react-router";
// productData

const productData = [
    {
        id: 1,
        image: 'https://anandhaassweets.com/cdn/shop/files/GulkandBiscuit_700e9aa7-52a9-4936-96fb-0e51051e47f6_720x.jpg?v=1715408102',     
           title:'Srivilliputhur Palkova' ,
        desc: 'Experience the Authentic Taste of srivilliputhur palkova',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://anandhaassweets.com/cdn/shop/files/BadamRoseLaddu_Preview_720x_053267ce-5da4-46f4-80bf-2da05d6b410a_720x.jpg?v=1715420804',
        title: 'Sugar Balls',
        desc: 'An eternal childhood favourite, these ooey-gooey-sugary balls .',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://anandhaassweets.com/cdn/shop/files/BalajiLaddu_Preview_720x_4c334fd1-9e7c-4ab6-b514-7095303d86ff_720x.jpg?v=1715345385',
        title: 'Tirunelveli Halwa',
        desc: 'Discover the authentic taste of Tirunelveli Halwa, a renowned delicacy',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://anandhaassweets.com/cdn/shop/files/GheeMysorePak_91c1d664-2996-48c5-b302-e01fcf11a542_360x.jpg?v=1715585447',
        title: 'Traditional Mysorepak',
        desc: 'Indulge in the delectable taste of Mysore Pak from the comfort of yours',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    { id: 1,
        image: 'https://anandhaassweets.com/cdn/shop/files/GulkandBiscuit_700e9aa7-52a9-4936-96fb-0e51051e47f6_720x.jpg?v=1715408102',     
           title:'Srivilliputhur Palkova' ,
        desc: 'Experience the Authentic Taste of srivilliputhur palkova',
        price: 150,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://anandhaassweets.com/cdn/shop/files/BadamRoseLaddu_Preview_720x_053267ce-5da4-46f4-80bf-2da05d6b410a_720x.jpg?v=1715420804',
        title: 'Sugar Balls',
        desc: 'An eternal childhood favourite, these ooey-gooey-sugary balls .',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://anandhaassweets.com/cdn/shop/files/BalajiLaddu_Preview_720x_4c334fd1-9e7c-4ab6-b514-7095303d86ff_720x.jpg?v=1715345385',
        title: 'Tirunelveli Halwa',
        desc: 'Discover the authentic taste of Tirunelveli Halwa, a renowned delicacy',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://anandhaassweets.com/cdn/shop/files/GheeMysorePak_91c1d664-2996-48c5-b302-e01fcf11a542_360x.jpg?v=1715585447',
        title: 'Traditional Mysorepak',
        desc: 'Indulge in the delectable taste of Mysore Pak from the comfort of yours',
        price: 120,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const HomePageProductCard = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>
            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate('/productinfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={image}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>
                                            <div className="flex justify-center ">
                                                <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                               add cart </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;