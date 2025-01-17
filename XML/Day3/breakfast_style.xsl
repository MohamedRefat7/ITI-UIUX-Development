<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <xsl:for-each select="breakfast_menu/food">
                    <div style="background-color: green; color: white; padding: 10px; margin: 5px 0; border-radius: 5px;">
                        <xsl:value-of select="name" />
                         Price:<xsl:value-of select="price" />
                    </div>
                        <p>Price:<xsl:value-of select="price" /></p>
                        <p>Description:<xsl:value-of select="description" /></p>
                        <p>Calories:<xsl:value-of select="calories" /></p>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
