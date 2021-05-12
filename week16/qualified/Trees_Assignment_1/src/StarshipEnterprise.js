const Queue = require("./Queue");

class StarshipEnterprise {
	constructor(officerId = null, officerName = null, reportTo = null) {
		this.officerId = officerId;
		this.officerName = officerName;
		this.reportTo = reportTo; // the officer that the new officer reports to
		this.leftReport = null;
		this.rightReport = null;
	}

	assignOfficer(officerId, officerName) {
		// your solution hereassignOfficer(officerId, officerName) {
		if (this.officerId === null) {
			this.officerId = officerId;
			this.officerName = officerName;
		} else if (officerId < this.officerId) {
			if (this.leftReport === null) {
				this.leftReport = new StarshipEnterprise(officerId, officerName, this);
			} else {
				this.leftReport.assignOfficer(officerId, officerName);
			}
		} else {
			if (this.rightReport === null) {
				this.rightReport = new StarshipEnterprise(officerId, officerName, this);
			} else {
				this.rightReport.assignOfficer(officerId, officerName);
			}
		}
	}
	countLeavesRecurse(node, values) {
		if (node == null) return;
		if (node.leftReport == null && node.rightReport == null) {
			return values.push(node.officerName);
		} else {
			this.countLeavesRecurse(node.leftReport, values);
			this.countLeavesRecurse(node.rightReport, values);
		}
	}
	findOfficersWithNoDirectReports(values = []) {
		// your solution here
		this.countLeavesRecurse(this, values);

		return values;
	}

	listOfficersByExperience(officerNames = []) {
		// your solution here

		if (this.rightReport) {
			officerNames = this.rightReport.listOfficersByExperience(officerNames);
		}
		officerNames.push(this.officerName);
		if (this.leftReport) {
			officerNames = this.leftReport.listOfficersByExperience(officerNames);
		}
		return officerNames;
	}

	listOfficersByRank(tree, rankedOfficers = {}) {
		this.bfs(this, rankedOfficers, 0);
		return rankedOfficers;
	}
	bfs(node, rankedOfficers, index) {
		if (node) {
			if (rankedOfficers[index + 1]) {
				rankedOfficers[index + 1].push(node.officerName);
			} else {
				rankedOfficers[index + 1] = [node.officerName];
			}
			this.bfs(node.leftReport, rankedOfficers, index + 1);
			this.bfs(node.rightReport, rankedOfficers, index + 1);
		}
	}
}

module.exports = StarshipEnterprise;
