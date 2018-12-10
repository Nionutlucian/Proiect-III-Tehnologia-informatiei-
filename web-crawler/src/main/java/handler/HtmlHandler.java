package handler;

import java.io.IOException;
import java.util.ArrayList;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.model.Product;

public class HtmlHandler {

	private String url1;
	private Document doc;

	public HtmlHandler(String url1) {
		this.url1 = url1;
	}

	public ArrayList<Product> test() throws IOException {
		doc = Jsoup.connect(url1).get();
		Elements productsTop = doc.getElementsByClass("card-heading");
		Elements productsMiddle = doc.getElementsByClass("card-section-mid-inner");
		Elements productsBottom = doc.getElementsByClass("product-new-price");
		ArrayList<Product> products = new ArrayList<>();
		Product prod;

		for (Element p : productsTop) {
			if (p.getElementsByTag("a").attr("href") != "") {
				prod = new Product();
				prod.setImage(p.getElementsByTag("img").attr("src"));
				prod.setUrl(p.getElementsByTag("a").attr("href"));
				prod.setProvider("eMAG");
				products.add(prod);
			}
		}
		int i = 0;
		for (Element p : productsMiddle) {
			products.get(i).setTitle(p.getElementsByTag("a").attr("title"));
			i++;
		}
		i = 0;
		for (Element p : productsBottom) {
			if(p.ownText().length()!=0) {
				products.get(i).setPrice(p.ownText());
				i++;
			}
		}

		for (Product p : products) {
			System.out.println(p.toString());
		}

		return products;
	}
}
