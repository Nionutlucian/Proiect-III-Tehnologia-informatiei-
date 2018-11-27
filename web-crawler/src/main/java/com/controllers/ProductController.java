package com.controllers;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

	@Autowired
	ProductService productService;
	
	@RequestMapping(value="/search/{product}", method = RequestMethod.GET)
	public @ResponseBody String search(@PathVariable(value="product") String product) {
		return "Ati cautat: " + product;
	}
	
	@RequestMapping(value="/testSearch", method = RequestMethod.GET)
	public @ResponseBody String search() {
		try {
			return productService.searchProduct();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "A aparut o eroare";
		}
	}
	
	
}