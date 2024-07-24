import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import About from "./components/about/About"
import TermsOfUse from "./components/termsofuse/TermsOfUse";
import PrivacyPolicy from "./components/privacypolicy/Pp";
import FAQ from "./components/faq/Faq";
import Blog from "./components/blog/Blog";



function App() {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    console.log(url);

    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };

    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        const data = await Promise.all(promises);
        console.log(data);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        dispatch(getGenres(allGenres));
    };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/about" element={<About />}/>
                <Route path="/termsofuse" element={<TermsOfUse/>}/>
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
export default App;


// const App = () => {
//     return (
//         <Route>
//             <Routes>
//                 <Route path="/terms-of-use" element={<TermsOfUse />} />
//                 <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/blog" element={<Blog />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 {/* Add other routes here */}
//             </Routes>
//             <Footer />
//         </Route>
//     );
// };


