import Document , {Html,Head,Main, NextScript, DocumentContext, DocumentInitialProps} from '../node_modules/next/document';

class MyDocument extends Document{
	static async getInitialProps(ctx: DocumentContext)  {
		const initialProps = await Document.getInitialProps(ctx);
		return  {...initialProps};

	}


	render(){
		return(
			<Html>
				<Head lang="ru"/>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		)


	}

}
export default MyDocument;
