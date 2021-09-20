const handleModifiers = (string, style) => {
	const list = string.split(' ');
	return list.map(item => { return style[item]; }).join(' ');
};

export default handleModifiers;
