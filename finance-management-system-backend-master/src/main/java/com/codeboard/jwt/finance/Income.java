package com.codeboard.jwt.finance;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "income")
public class Income {
    @Id
    @GeneratedValue
    (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="incomeDetails")
    private String name; 
    
    public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "amount")
    private Double amount;

    @Column(name = "date")
    private String date;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Income [id=" + id + ", amount=" + amount + ", date=" + date + "]";
	}

	public Income() {
		super();
	}
	

}