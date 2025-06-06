import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// Replace react-responsive-carousel with react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const placeholderImage = "https://hotellobbycandle.com/cdn/shop/files/Signature_Product_Carousel_4__Desktop_1.png?v=3782974752646208633";

const products = [
	{
		name: "Apple Cinnamon",
		description: "Warm vanilla with a hint of caramel.",
		price: "$11.99",
		image: placeholderImage,
	},
	{
		name: "Lavender Serenity",
		description: "Relaxing lavender blend for calm evenings.",
		price: "$11.99",
		image: placeholderImage,
	},
	{
		name: "Cucumber & Melon",
		description: "Bright citrus mix to energize your space.",
		price: "11.99",
		image: placeholderImage,
	}
];

export default function HomePage() {
	const sliderRef = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const nextSlide = () => {
		if (isAnimating || !sliderRef.current) return;
		setIsAnimating(true);
		sliderRef.current.slickNext();
		setTimeout(() => setIsAnimating(false), 500);
	};

	const prevSlide = () => {
		if (isAnimating || !sliderRef.current) return;
		setIsAnimating(true);
		sliderRef.current.slickPrev();
		setTimeout(() => setIsAnimating(false), 500);
	};

	// Settings for react-slick
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,  // Changed from 3 to 1 to make central slide wider
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '15%',  // Added padding on sides to create space for side slides
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: false,
		beforeChange: () => setIsAnimating(true),
		afterChange: (current) => {
			setCurrentSlide(current);
			setIsAnimating(false);
		},
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '10%'  // Smaller padding on mobile
				}
			}
		]
	};

	return (
		<main className="min-h-screen bg-white text-black p-0 flex flex-col justify-between">
			<Navigation />

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="w-full max-w-5xl mx-auto px-4"
			>
				<div className="flex flex-col items-center pt-10">
					<img
						src="https://i.ibb.co/wV72Sjx/RALogo.png"
						alt="RA Logo"
						className="w-24 h-24 object-contain mb-2"
					/>
					<h1 className="text-5xl font-bold text-center mb-4 pt-2">
						Royal Aromas Candles
					</h1>
				</div>
				<p className="text-center text-lg text-gray-600 mb-8">
					Elegant candles crafted for luxury, tranquility, and timeless charm.
				</p>

				<div className="w-full flex justify-center overflow-hidden">
					<div className="w-full max-w-4xl">
						<div className="carousel-container overflow-hidden relative">
							<Slider ref={sliderRef} {...settings} className="product-slider">
								{products.map((product, idx) => (
									<div
										key={idx}
										className="px-2"
									>
										<div
											id={`card-${idx}`}
											className="relative w-full h-96 bg-cover bg-center rounded-2xl shadow-lg overflow-hidden flex items-end transform transition-transform duration-500 mx-auto"
											style={{ backgroundImage: `url(${product.image})` }}
										>
											<div className="bg-black bg-opacity-50 text-white w-full p-4 text-center">
												<h2 className="text-2xl font-bold mb-1">{product.name}</h2>
												<p className="text-md mb-2">{product.price}</p>
												<Button className="bg-gradient-to-r from-amber-400 to-amber-600 text-black hover:from-amber-500 hover:to-amber-700 rounded-xl px-4 py-2 text-sm font-medium shadow-md">
													Learn More
												</Button>
											</div>
										</div>
									</div>
								))}
							</Slider>
						</div>
						<div className="flex justify-center gap-6 mt-4">
							<Button
								variant="outline"
								className="rounded-full p-2"
								onClick={prevSlide}
								disabled={isAnimating}
							>
								<ChevronLeft className="w-6 h-6" />
							</Button>
							<Button
								variant="outline"
								className="rounded-full p-2"
								onClick={nextSlide}
								disabled={isAnimating}
							>
								<ChevronRight className="w-6 h-6" />
							</Button>
						</div>
					</div>
				</div>

				<style jsx global>{`
					.product-slider .slick-slide {
						opacity: 0.4;
						transform: scale(0.85);
						transition: all 0.5s ease;
						padding: 0 10px;
					}
					.product-slider .slick-center {
						opacity: 1;
						transform: scale(1);
					}
					.product-slider .slick-list {
						overflow: hidden !important;
						padding: 1rem 0;
						margin: 0 -10px;
					}
					.carousel-container {
						overflow: hidden;
						width: 100%;
					}
					.product-slider .slick-track {
						display: flex;
						align-items: center;
					}
					.product-slider .slick-arrow {
						display: none !important;
					}
					/* Ensure proper width for slide content */
					.product-slider .slick-slide > div {
						width: 100%;
					}
					/* Prevent horizontal overflow */
					html, body {
						overflow-x: hidden;
						width: 100%;
					}
				`}</style>
			</motion.div>

			<Footer />
		</main>
	);
}
