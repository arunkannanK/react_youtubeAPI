import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './sample'; 
import Panel from './panel';

const Func = () => {
	return (
		<div>
			<Panel>
				Are u sure?
			</Panel>
			<Panel>
				<Sample name="Arun" age="26"/>
			</Panel>
			<Panel>
				<Sample name="Kannan" age="52" />
			</Panel>
			<Panel>
				<Sample name="Yasar" age="14" />
			</Panel>
		</div>	
	);
}

ReactDOM.render(<Func />,document.getElementById('root'));
