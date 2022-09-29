import { StyledCarousel } from './style';
import logoImg from '../../../../public/images/gallery/logo.png'

const Carousel = ({ heading, subHeading2, background }) => {
	return (
		<StyledCarousel background={background}>
			<img src={logoImg} alt="logo good chef" />
			<h1>{heading}</h1>
			<span>{subHeading2}</span>
		</StyledCarousel>
	);
};

export default Carousel;
