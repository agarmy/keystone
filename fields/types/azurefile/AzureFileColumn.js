var React = require('react');

var AzureFileColumn = React.createClass({
	renderValue: function() {
		var value = this.props.data.fields[this.props.col.path];
		if (!value) return;
		return <a href={value.url} target='_blank'>{value.url}</a>;
	},
	render: function() {
		return (
			<td className="ItemList__col">
				<div className="ItemList__value ItemList__value--azure-file">{this.renderValue()}</div>
			</td>
		);
	}
});

module.exports = AzureFileColumn;
