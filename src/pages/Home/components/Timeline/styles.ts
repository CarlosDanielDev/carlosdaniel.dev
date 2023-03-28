import styled from 'styled-components';

export const TimelineWrapper = styled.div`
	position: relative;
	padding: 0;
	margin: 20px 0;
	width: 100%;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		width: 2px;
		height: 100%;
		background-color: #ccc;
	}
`;

export const TimelineItem = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: 10px 0;

	&:nth-child(odd) {
		flex-direction: row;
	}
`;

export const TimelineContent = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 20px;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
`;

export const TimelineYear = styled.h2`
	position: absolute;
	top: 0;
	left: -60px;
	margin: 0;
	font-size: 24px;
	font-weight: bold;
	color: #333333;
`;

export const TimelineCompanyName = styled.h3`
	margin: 0 0 10px;
	font-size: 18px;
	font-weight: bold;
	color: #333333;
`;

export const TimelineDescription = styled.p`
	margin: 0;
	font-size: 16px;
	font-weight: normal;
	color: #666666;
`;
