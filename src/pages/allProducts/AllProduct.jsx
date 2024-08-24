import { useNavigate } from "react-router";
import Layout from "../../components/layout/layout";

// productData 
const productData = [
    {
        id: 1,
        image: 'https://pettikadai.in/cdn/shop/files/SrivilliputhurPalkova_2000x.png?v=1683958651',
        title: 'Srivilliputhur Palkova-ஸ்ரீவில்லிபுத்தூர் பால்கோவா',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 150,
        weight: 250,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://pettikadai.in/cdn/shop/products/TheanMittai1_2000x.png?v=1679641481',
        title: 'Sugar Balls-தேன் மிட்டாய்',
        desc: 'An eternal childhood favourite, these ooey-gooey-sugary balls of goodness are your go-to mittais in moments of joy and sadness. Pop one into your mouth, close your eyes and relive your childhood. ',
        price: 170,
        trendingProductName: 'Featured',
        weight: 250,
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://pettikadai.in/cdn/shop/files/Untitleddesign_18_f52d9cd7-432f-42b2-b5a9-8178a2810e5d_2000x.png?v=1690448733',
        title: 'Tirunelveli Halwa-திருநெல்வேலி அல்வா',
        desc: 'Discover the authentic taste of Tirunelveli Halwa, a renowned delicacy that hails from the historic city of Tirunelveli in Tamil Nadu, India.',
        price: 190,
        weight:200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://anandhaassweets.com/cdn/shop/files/GheeMysorePak_1_720x.png?v=1715585447',
        title: 'TRADITIONAL MYSOREPAK-மைசூர்பாக்',
        desc: 'Indulge in the delectable taste of Mysore Pak from the comfort of your home. Order authentic sweet and experience the rich flavors of this traditional Indian sweet. Our handcrafted Mysore Pak is made with the finest ingredients, ensuring a melt-in-your-mouth experience with every bite',
        price: 190,
        weight:200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://pettikadai.in/cdn/shop/products/GHEEMYSOREPA_2000x.jpg?v=1672645592',
        title: 'GHEE MYSOREPAK-நெய் மைசூர்பாக்',
        desc: 'GHEE MYSOREPAK-நெய் மைசூர்பாக்',
        price:300 ,
        weight:250,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://pettikadai.in/cdn/shop/products/mixture-1_2000x.jpg?v=1673969755',
        title: 'Tirunelveli Mixture-திருநெல்வேலி மிக்சர்',
        desc: 'A mixture of all delicious and crunchy savouries, seasoned with groundnuts, spices and curry leaves is a signature snack of the famous original Shanthi Sweets, Tirunelveli, which has been an eternal favourite of people for years. Enjoy this savoury with tea or as an accompaniment with meals, and it is sure to keep your taste buds addicted!',
        price: 200,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://pettikadai.in/cdn/shop/products/sev_2000x.jpg?v=1672645599',
        title: 'Sattur Sev-சாத்தூர் சேவு',
        desc: ' Save your snack cravings for this delectable savoury, called Sattur Sev, maybe for a reason! From the authentic kitches in Sattur, this Sev has become an identity for its place of origin',
        price: 130,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 1,
        image: 'https://pettikadai.in/cdn/shop/products/GHEEMYSOREPA_2000x.jpg?v=1672645592',
        title: 'GHEE MYSOREPAK-நெய் மைசூர்பாக்',
        desc: 'GHEE MYSOREPAK-நெய் மைசூர்பாக்',
        price:300 ,
        weight:250,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const AllProduct = () => {
    const navigate = useNavigate();
    return (
        <Layout>
    <div className="py-8">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">All Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 lg:px-0 py-5 mx-auto">
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
                                            Muthu kumaran sweet
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
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
        </Layout>
    );
}

export default AllProduct;