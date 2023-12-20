const getOpportunities = async () => {
	return await $fetch('/opportunities/allOpportunities');
};

const getRelatedOpportunities = async (priority: number) => {
	return await $fetch('/opportunities/adjacentOpportunities', {method: 'post', body: {priority}});
};

const getOpportunitiesBySlug = async (opportunity: string) => {
	return await $fetch('/opportunities/opportunityBySlug', {method: 'post', body: {opportunity}});
};

export {
	getOpportunities,
	getRelatedOpportunities,
	getOpportunitiesBySlug
};

