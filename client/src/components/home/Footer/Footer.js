import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import SocialButtonsPage from '../SocialMedia/Socialmedia';
import Map from '../Map/Map';

const FooterContainer = styled.footer`
.footer-middle {
	background: var(--mainDark);
	padding-top: 3rem;
	color: var(--mainWhite)
}
.footer-bottom { 
   padding-top: 3rem;
   padding-bottom: 2rem;
}
a {
	color: var(--mainWhite)
}
a: hover {
	color: var(--mainLightGrey)
}
`;

function Footer() {
	return (
		<FooterContainer className="main-footer">
			<div className="footer-middle">
			<div className="container">
				<div className="row">
					{/**Column1 */}					
					<div className="col-sm">
						<h4>More Links</h4>
						<ul className="list-unstyled">
							<li><a href="/signin">Become a client</a></li>
							<li><a href="/contact">Chat with us</a></li>
							<li><a href="/faq">FAQs</a></li>	
							<li><a href="/appointment">Take an appointment</a></li>								
						</ul>
					</div>
					{/**Column2 */}
					<div className="col-sm">
						<h4>You can contact us on</h4>
						<ul className="list-unstyled">
							<li>&nbsp;<i className="fa fa-mobile" aria-hidden="true"></i> +21651858585</li>	
							<li>&nbsp;<i className="fa fa-phone" aria-hidden="true"></i> +21671858585</li>
							<li>&nbsp;<i className="fa fa-envelope-o" aria-hidden="true"></i> osa@bank.tn</li>
							<li>&nbsp;<i className="fa fa-map-marker" aria-hidden="true"></i> Rue IBN HAMDOUN En Nekhilet</li>
										
						</ul>
					</div>
					{/**Column3 */}
					<div className="col-sm">
						<h4>Local Address</h4>
						<Map/>
					</div>
				</div>
				{/* Footer bottom */}
				<div className="footer-bottom">
					<p className="text-xs-center">
						&copy; OSA Bank -All Rights Reserved
					</p>
					<SocialButtonsPage />
				</div>

			</div>	
			</div>
		</FooterContainer>
	);
  }


 export default Footer;

