module Jekyll
    class AutoLinker < Jekyll::Generator
      safe true
  
      def generate(site)
        keyword_links = YAML.load_file(File.join(site.source, '_data/keywords.yml'))
        site.pages.each do |page|
          keyword_links.each do |keyword, url|
            page.content.gsub!(/\b#{Regexp.escape(keyword)}\b/i, "[#{keyword}](#{url})")
          end
        end
      end
    end
  end
  