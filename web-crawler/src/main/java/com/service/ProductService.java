package com.service;

import java.io.IOException;
import org.springframework.stereotype.Service;
import handler.HtmlHandler;

@Service
public class ProductService {

	HtmlHandler handlerHtml = new HtmlHandler("https://www.emag.ro/search/tv/p2");
	
	public String searchProduct() throws IOException {
		return handlerHtml.test();
	}
	
	
}
