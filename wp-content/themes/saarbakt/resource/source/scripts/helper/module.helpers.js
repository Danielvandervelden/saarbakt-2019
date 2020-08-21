/**
 * 
 * @param {Nodelist} nodelist The nodelist you want to convert to an array.
 */
const toArray = nodelist => {
	const arr = [];
	
	for(var i=-1,l=nodelist.length;++i!==l;arr[i]=nodelist[i]);

	return arr;
}

module.exports = {
	toArray
}