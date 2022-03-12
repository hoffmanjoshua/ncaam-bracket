import {Link} from "react-router-dom"

function BracketPicker() {
	
	return (
		<>
			<h1 className="font-weight-semi-bold">
				Josh&#39;s Brackets
			</h1>
			<div class="row justify-content-center mb-15">
			  <div class="col-md-6">
				<Link to="/m"><button className="btn btn-block btn-primary mb-10 text-white" type="button">NCAA Men&#39;s Tournament </button></Link>
				<Link to="/w"><button className="btn btn-block btn-primary mb-10 text-white" type="button">NCAA Women&#39;s Tournament </button></Link>
			  </div>
			</div>
			
		</>
	);
}

export default BracketPicker;
