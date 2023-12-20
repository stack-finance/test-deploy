const getAllCalculators = async () => {
	return await $fetch('/calculators/allCalculators');
}


const getCalculatorDetail = async (slug: string) => {
	return await $fetch('/calculators/calculatorBySlug', {method: 'post', body: {slug}});
}

export { getCalculatorDetail, getAllCalculators };
