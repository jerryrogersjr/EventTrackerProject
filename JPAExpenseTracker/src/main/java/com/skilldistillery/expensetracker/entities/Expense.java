package com.skilldistillery.expensetracker.entities;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Expense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "expense_date")
	private Date expenseDate;

	@Column(name = "paid_to")
	private String paidToName;

	@Column(name = "expense_type")
	private String expenseType;

	@Column(name = "payment_type")
	private String paymentType;

	@Column(name = "workorder_num")
	private int workorderNumber;

	@Column(name = "expense_description")
	private String description;

	@Column(name = "expense_total")
	private double expenseTotal;

	@Column(name = "created_at")
	private Date createdAt;

	@Column(name = "updated_at")
	private Date updatedAt;

	public Expense() {
		super();
	}

	public Expense(int id, Date expenseDate, String paidToName, String expenseType, String paymentType,
			int workorderNumber, String description, double expenseTotal, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.expenseDate = expenseDate;
		this.paidToName = paidToName;
		this.expenseType = expenseType;
		this.paymentType = paymentType;
		this.workorderNumber = workorderNumber;
		this.description = description;
		this.expenseTotal = expenseTotal;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getExpenseDate() {
		return expenseDate;
	}

	public void setExpenseDate(Date expenseDate) {
		this.expenseDate = expenseDate;
	}

	public String getPaidToName() {
		return paidToName;
	}

	public void setPaidToName(String paidToName) {
		this.paidToName = paidToName;
	}

	public String getExpenseType() {
		return expenseType;
	}

	public void setExpenseType(String expenseType) {
		this.expenseType = expenseType;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public int getWorkorderNumber() {
		return workorderNumber;
	}

	public void setWorkorderNumber(int workorderNumber) {
		this.workorderNumber = workorderNumber;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getExpenseTotal() {
		return expenseTotal;
	}

	public void setExpenseTotal(double expenseTotal) {
		this.expenseTotal = expenseTotal;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Override
	public String toString() {
		return "Expense [id=" + id + ", expenseDate=" + expenseDate + ", paidToName=" + paidToName + ", expenseType="
				+ expenseType + ", paymentType=" + paymentType + ", workorderNumber=" + workorderNumber
				+ ", description=" + description + ", expenseTotal=" + expenseTotal + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((createdAt == null) ? 0 : createdAt.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((expenseDate == null) ? 0 : expenseDate.hashCode());
		long temp;
		temp = Double.doubleToLongBits(expenseTotal);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((expenseType == null) ? 0 : expenseType.hashCode());
		result = prime * result + id;
		result = prime * result + ((paidToName == null) ? 0 : paidToName.hashCode());
		result = prime * result + ((paymentType == null) ? 0 : paymentType.hashCode());
		result = prime * result + ((updatedAt == null) ? 0 : updatedAt.hashCode());
		result = prime * result + workorderNumber;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Expense other = (Expense) obj;
		if (createdAt == null) {
			if (other.createdAt != null)
				return false;
		} else if (!createdAt.equals(other.createdAt))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (expenseDate == null) {
			if (other.expenseDate != null)
				return false;
		} else if (!expenseDate.equals(other.expenseDate))
			return false;
		if (Double.doubleToLongBits(expenseTotal) != Double.doubleToLongBits(other.expenseTotal))
			return false;
		if (expenseType == null) {
			if (other.expenseType != null)
				return false;
		} else if (!expenseType.equals(other.expenseType))
			return false;
		if (id != other.id)
			return false;
		if (paidToName == null) {
			if (other.paidToName != null)
				return false;
		} else if (!paidToName.equals(other.paidToName))
			return false;
		if (paymentType == null) {
			if (other.paymentType != null)
				return false;
		} else if (!paymentType.equals(other.paymentType))
			return false;
		if (updatedAt == null) {
			if (other.updatedAt != null)
				return false;
		} else if (!updatedAt.equals(other.updatedAt))
			return false;
		if (workorderNumber != other.workorderNumber)
			return false;
		return true;
	}

}
