package com.Project20222023.vehiclerental;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import android.os.Bundle;

@SpringBootApplication
public class VehiclerentalApplication {

	public static void main(String[] args) {
		SpringApplication.run(VehiclerentalApplication.class, args);
	}

	@Override
	protected void onCreate(Bundle savedInstanceState) {
  		super.onCreate(null);
	}
}
