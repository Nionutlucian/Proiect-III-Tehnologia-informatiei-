package handler;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;


public class HtmlHandler {

	private String url1;
	private Document doc;
    private Elements media; 

	
	public HtmlHandler(String url1) {
		this.url1 = url1;
	}
	
	public String test() throws IOException {
		doc = Jsoup.connect(url1).get();
		Elements productsDiv = doc.getElementsByClass("card-item js-product-data");

		String result = "";
		for (Element p : productsDiv) {
			Element productDiv = p.getElementById("card-item js-product-data");
		}
		
		return result; 
	}
}
